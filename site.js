const S=window.SITE,$=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
if(S.heroImage){const h=$('.hero');h.style.backgroundImage='url('+S.heroImage+')';h.classList.add('img')}
$('#team').innerHTML=S.team.map(m=>`<article><div class="ph" data-i="${esc(m.name.split(' ').map(x=>x[0]).slice(0,2).join(''))}"><img src="${esc(m.photo)}" alt="${esc(m.name)}" width="150" height="150"></div><h3>${esc(m.name)}</h3><p class="r">${esc(m.role)}</p>${m.bio?`<p class="b">${esc(m.bio)}</p>`:''}</article>`).join('');
const U=S.updates||[];
$('#upd').innerHTML=U.length?U.map(u=>`<article>${u.image?`<img src="${esc(u.image)}" alt="${esc(u.title)}" loading="lazy">`:''}<div><time datetime="${esc(u.date)}">${new Date(u.date).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}</time><h3>${esc(u.title)}</h3><p>${esc(u.text)}</p></div></article>`).join(''):`<p class="e">Our first campaign is being planned. Follow @${esc(S.instagram.handle)} on Instagram to hear about it first.</p>`;
$$('.ph img,#upd img').forEach(i=>i.addEventListener('error',()=>i.remove()));
const p=S.donation;
$('#pay').innerHTML=`<h3>Payment details</h3><dl><dt>Payment service</dt><dd>${esc(p.method)}</dd><dt>Account holder</dt><dd>${esc(p.holder)}</dd><dt>Account or mobile number</dt><dd>${esc(p.number)} <button class="btn gold" id="cp" type="button">Copy</button></dd></dl><p class="note">${esc(p.note)}</p>`;
$('#cp').onclick=async e=>{const b=e.target;try{await navigator.clipboard.writeText(p.number);b.textContent='Copied'}catch{b.textContent='Copy failed'}setTimeout(()=>b.textContent='Copy',2000)};
const IC='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>';
$$('.ig').forEach(a=>{a.href=S.instagram.url;a.target='_blank';a.rel='noopener noreferrer';a.innerHTML=IC+'@'+esc(S.instagram.handle)});
$$('.ct').forEach(c=>{const a=[esc(S.location)];if(S.email)a.push(`<a href="mailto:${esc(S.email)}">${esc(S.email)}</a>`);if(S.phone)a.push(`<a href="tel:${esc(S.phone.replace(/^0/,'+92'))}">${esc(S.phone)}</a>`);c.innerHTML=a.join(' · ')});
$('#yr').textContent=new Date().getFullYear();
$('#mb').onclick=e=>{const o=$('#lk').classList.toggle('open');e.target.setAttribute('aria-expanded',o)};
$('#lk').onclick=()=>$('#lk').classList.remove('open');
$$('form').forEach(f=>{
 f.insertAdjacentHTML('beforeend','<input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">');
 f.onsubmit=async e=>{e.preventDefault();if(f.website.value)return;
  const m=f.querySelector('.msg'),b=f.querySelector('button[type=submit]'),k=S.form.accessKey;
  if(!k){m.textContent='This form is not connected yet. Please message us on Instagram.';return}
  const d=new FormData(f);d.delete('website');d.append('access_key',k);d.append('subject',f.dataset.subject);
  m.textContent='Sending…';b.disabled=true;
  try{const r=await fetch('https://api.web3forms.com/submit',{method:'POST',body:d});if(!(await r.json()).success)throw 0;f.reset();m.textContent=f.dataset.ok}
  catch{m.textContent='We could not send this. Please try again or message us on Instagram.'}
  b.disabled=false}});
