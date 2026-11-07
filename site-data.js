/* AL-MADAR FOUNDATION — EDIT THIS FILE. Everything that changes on the website lives here.
   Keep the commas and quotation marks exactly as they are. Save, then upload to GitHub. */
window.SITE = {
  heroImage: "",                      // e.g. "images/hero.jpg". Leave "" for plain forest green.
  instagram: { handle: "almadaroffical", url: "https://www.instagram.com/almadaroffical/" },
  location: "Faisalabad, Pakistan",
  email: "almadarfoundationpk@gmail.com",
  phone: "03007625087",
  form: { accessKey: "" },            // free key from web3forms.com (see setup guide)

  // TO ADD A CAMPAIGN OR NEWS ITEM: remove the // from the lines below and edit them.
  // Newest first. Date format must be YYYY-MM-DD. "image" is optional (put the file in "images").
  updates: [
    // { title: "Our first food drive", date: "2026-12-01", text: "What happened, in two or three sentences.", image: "images/food-drive.jpg" },
  ],

  // TO ADD A PHOTO: put the picture in the "images" folder and make "photo" match its file name.
  // TO ADD A PERSON: copy one { ... } block and change it. Leave bio "" if you have none yet.
  team: [
    { name: "Hasham Sultan", role: "Founder", photo: "images/hasham-sultan.jpg",
      bio: "I believe that change begins when we stop waiting for someone else to make it happen. Al-Madar is my effort to turn that belief into something meaningful, bringing people together to serve society, care for nature, and create an impact that goes beyond ourselves." },
    { name: "Nimra Bhutta", role: "Co-founder", photo: "images/nimra-bhutta.jpg", bio: "" },
    { name: "Hania Anas Piracha", role: "Co-founder", photo: "images/hania-anas-piracha.jpg", bio: "" }
  ],

  donation: {
    method: "NayaPay",
    holder: "Hasham Sultan",
    number: "03007625087",
    note: "Donations are currently received in the founder's personal NayaPay account. Please check that the recipient name matches before you send."
  }
};
