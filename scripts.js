/*
const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};
$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#clickMeButton").click(() => {
    clickMe();
  });
});
*/
const cardList = [
  {
    title: "kitchen 2",
    path: "images/kitchen_2.png",
    subTitle: "About kitchen 2",
    description: "Description of kitchen 2",
  },
  {
    title: "kitchen 3",
    path: "images/kitchen_3.png",
    subTitle: "About kitchen 3",
    description: "Description of kitchen 3",
  },
];

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.path +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.desciption +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

const formSumitted = () => {
  let formData = {};
  formData.firstName = $("#first_name").val();
  formData.lastName = $("#last_name").val();
  formData.password = $("#password").val();
  formData.email = $("#email").val();

  console.log(formData);
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#formSubmit").click(() => {
    formSumitted();
  });
  addCards(cardList);
  $(".modal").modal();
});
