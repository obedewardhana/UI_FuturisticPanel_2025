AOS.init();

(function ($) {
  "use strict";

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  // $(window).on('load',function(){
  //   $('.panel-content').addClass('flipped');
  // });

  // Scrollax
  $.Scrollax();

  var carousel = function () {
    $(".carousel-services").owlCarousel({
      loop: false,
      dots: false,
      autoplay: false,
      items: 1,
      margin: 30,
      stagePadding: 0,
      pagination: false,
      nav: true,
      navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
    $(".carousel-testimony").owlCarousel({
      center: true,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  };
  carousel();

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").removeClass("show");
      // }, 100);
    }
  );

  $("#dropdown04").on("show.bs.dropdown", function () {
    console.log("show");
  });

  // scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap");

      if (st > 150) {
        if (!navbar.hasClass("scrolled")) {
          navbar.addClass("scrolled");
        }
      }
      if (st < 150) {
        if (navbar.hasClass("scrolled")) {
          navbar.removeClass("scrolled sleep");
        }
      }
      if (st > 350) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
        }

        if (sd.length > 0) {
          sd.addClass("sleep");
        }
      }
      if (st < 350) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
          navbar.addClass("sleep");
        }
        if (sd.length > 0) {
          sd.removeClass("sleep");
        }
      }
    });
  };
  scrollWindow();

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  $(".counter").countTo();

  $(window).scroll(function () {
    if ($("#achievement").offset().top >= $(window).scrollTop()) {
      $(".counter").countTo("restart");
    } else {
      //do something else
    }
  });

  //   var counter = function () {
  //     $("#section-counter, .hero-wrap, .ftco-counter").waypoint(
  //       function (direction) {
  //         if (
  //           direction === "down" &&
  //           !$(this.element).hasClass("ftco-animated")
  //         ) {
  //           var comma_separator_number_step =
  //             $.animateNumber.numberStepFactories.separator(",");
  //           $(".number").each(function () {
  //             var $this = $(this),
  //               num = $this.data("number");
  //             console.log(num);
  //             $this.animateNumber(
  //               {
  //                 number: num,
  //                 numberStep: comma_separator_number_step,
  //               },
  //               7000
  //             );
  //           });
  //         }
  //       },
  //       { offset: "95%" }
  //     );
  //   };
  //   counter();

  var contentWayPoint = function () {
    var i = 0;
    $(".ftco-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  // navigation
  var OnePageNav = function () {
    $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on(
      "click",
      function (e) {
        e.preventDefault();

        var hash = this.hash,
          navToggler = $(".navbar-toggler");
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          700,
          "easeInOutExpo",
          function () {
            window.location.hash = hash;
          }
        );

        if (navToggler.is(":visible")) {
          navToggler.click();
        }
      }
    );
    $("body").on("activate.bs.scrollspy", function () {
      console.log("nice");
    });
  };
  OnePageNav();

  $(".navbar-toggler").on("click", function () {
    $(".collapse").toggleClass("slide");
    $("body").toggleClass("overflow-hidden");
  });

  $(document).click(function (e) {
    var container = $(".navbar-toggler");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".collapse").removeClass("slide");
      $(".collapse").removeClass("show");
      $("body").removeClass("overflow-hidden");
    }
  });

  // magnific popup
  $(".image-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  $("#book_pick_date,#book_off_date").datepicker({
    format: "d-m-yyyy",
    autoclose: true,
  });

  $("#book_pick_date")
    .datepicker()
    .on("changeDate", function (ev) {
      $("#book_pick_date").removeClass("error").next("label.error").remove();
    });

  $("#book_off_date")
    .datepicker()
    .on("changeDate", function (ev) {
      $("#book_off_date").removeClass("error").next("label.error").remove();
    });

  var d = new Date();
  $("#pick_time").timepicker({
    timeFormat: "H:i",
  });
  $("#drop_time").timepicker({
    timeFormat: "H:i",
  });
  $("#fix_picktime").timepicker({
    timeFormat: "H:i",
  });
  $("#fix_droptime").timepicker({
    timeFormat: "H:i",
  });

  $("#fix_pickdate,#fix_dropdate").datepicker({
    format: "d-m-yyyy",
    autoclose: true,
  });

  $("#fix_pickdate")
    .datepicker()
    .on("changeDate", function (ev) {
      $("#fix_pickdate").removeClass("error").next("label.error").remove();
      var curpick = $("#fix_pickdate").val();

      var datepick = curpick.split("-");
      var formatpick = datepick[1] + "-" + datepick[0] + "-" + datepick[2];
      var k = new Date(formatpick);
      var newpickdate = moment(k).format("YYYY-MM-DD");

      $("#fix_pickdate").attr("data-realpick", newpickdate);
    });

  $("#fix_dropdate")
    .datepicker()
    .on("changeDate", function (ev) {
      $("#fix_dropdate").removeClass("error").next("label.error").remove();
      var curdrop = $("#fix_dropdate").val();
      var datedrop = curdrop.split("-");
      var formatdrop = datedrop[1] + "-" + datedrop[0] + "-" + datedrop[2];
      var d = new Date(formatdrop);
      var newdropdate = moment(d).format("YYYY-MM-DD");

      $("#fix_dropdate").attr("data-realdrop", newdropdate);
    });

  $("#order-form").validate({
    rules: {
      location: {
        required: true,
      },
      book_pick_date: {
        required: true,
      },
      book_off_date: {
        required: true,
      },
      pick_time: {
        required: true,
      },
      drop_time: {
        required: true,
      },
    },
    messages: {
      location: {
        required: "*Pilih lokasi.",
      },
      book_pick_date: {
        required: "*Masukkan tanggal mulai.",
      },
      book_off_date: {
        required: "*Masukkan tanggal selesai.",
      },
      pick_time: {
        required: "*Masukkan waktu mulai.",
      },
      drop_time: {
        required: "*Masukkan selesai.",
      },
    },
    submitHandler: function (form) {
      $("#car-section").removeClass("d-none");

      $("html, body").animate(
        {
          scrollTop: $("#car-section").offset().top - 100,
        },
        500
      );

      $("[id^='btnBook_']").attr(
        "data-location",
        jQuery("select[name=location]").val()
      );
      $("[id^='btnBook_']").attr(
        "data-pickdate",
        jQuery("input[name=book_pick_date]").val()
      );
      $("[id^='btnBook_']").attr(
        "data-picktime",
        jQuery("input[name=pick_time]").val()
      );
      $("[id^='btnBook_']").attr(
        "data-dropdate",
        jQuery("input[name=book_off_date]").val()
      );
      $("[id^='btnBook_']").attr(
        "data-droptime",
        jQuery("input[name=drop_time]").val()
      );
    },
    errorPlacement: function (label, element) {
      label.addClass("error");
      element.after(label);
    },
  });

  $("[id^='btnBook_']").on("click", function () {
    var id = $(this).attr("data-product");
    var location = $(this).attr("data-location");
    var service = $(this).attr("data-product");
    var proname = $(this).attr("data-proname");
    var picktime = $(this).attr("data-picktime");
    var droptime = $(this).attr("data-droptime");
    var pickdate = $(this).attr("data-pickdate");
    var dropdate = $(this).attr("data-dropdate");
    var transmission = $(this).attr("data-transmission");
    var seat = $(this).attr("data-seat");
    var wifi = $(this).attr("data-wifi");
    var hotwater = $(this).attr("data-hotwater");
    var photo = $(this).attr("data-photo");
    var price = $(this).attr("data-price");

    $("#detailCar").empty();
    $("#fix_location").val("");
    $("#fix_service").val("");
    $("#fix_pickdate").val("");
    $("#fix_picktime").val("");
    $("#fix_dropdate").val("");
    $("#fix_droptime").val("");

    var html =
      '<div class="detail-car"><img src="' +
      photo +
      '">' +
      '<div class="d-flex flex-column justify-content-center ml-4">' +
      '<p class="text-dark font-weight-bold mb-0">' +
      proname +
      "</p>" +
      '<div class="d-flex small mr-2"><span class="text-orange flaticon-car-seat price"></span><span class="ml-1">' +
      seat +
      " seats</span></div>" +
      '<div class="d-flex small"><span class="text-orange flaticon-pistons price mr-1"></span>' +
      transmission +
      "</div>" +
      '<div class="d-flex"><p class="text-orange small mb-0 mr-1">' +
      price +
      "</p> <span class='small'>/hari</span></div>" +
      "</div>" +
      "</div>";

    var htmlroom =
      '<div class="detail-car"><img src="' +
      photo +
      '">' +
      '<div class="d-flex flex-column justify-content-center  ml-4">' +
      '<p class="text-dark font-weight-bold mb-0">' +
      proname +
      "</p>" +
      '<div class="d-flex small align-items-center "><i class="text-orange fa fa-shower mr-1"></i><span class="ml-1">' +
      wifi +
      "</span></div>" +
      '<div class="d-flex small align-items-center"><i class="text-orange fa fa-wifi "></i><span class="ml-1">' +
      hotwater +
      "</span></div>" +
      '<div class="d-flex"><p class="text-orange small mb-0 mr-1">' +
      price +
      "</p> <span class='small'>/hari</span></div>" +
      "</div>" +
      "</div>";

    if (wifi != null) {
      $("#detailCar").append(htmlroom);
    } else {
      $("#detailCar").append(html);
    }

    $("#fix_location").val(location);
    $("#fix_service").val(service);
    $("#fix_picktime").val(picktime);
    $("#fix_droptime").val(droptime);

    $("#fix_pickdate").datepicker("update", pickdate);
    $("#fix_dropdate").datepicker("update", dropdate);

    var curpick = $("#fix_pickdate").val();
    var datepick = curpick.split("-");
    var formatpick = datepick[1] + "-" + datepick[0] + "-" + datepick[2];
    var k = new Date(formatpick);
    var newpickdate = moment(k).format("YYYY-MM-DD");

    var curdrop = $("#fix_dropdate").val();
    var datedrop = curdrop.split("-");
    var formatdrop = datedrop[1] + "-" + datedrop[0] + "-" + datedrop[2];
    var d = new Date(formatdrop);
    var newdropdate = moment(d).format("YYYY-MM-DD");

    $("#fix_pickdate").attr("data-realpick", newpickdate);
    $("#fix_dropdate").attr("data-realdrop", newdropdate);
  });

  $(".btn-buy").on("click", function () {
    var paket = $(this).attr("data-id");
    $("select[name=paket]").val(paket);
  });

  $("#confirm-form").validate({
    rules: {
      nama: {
        required: true,
      },
      handphone: {
        required: true,
      },
      address: {
        required: true,
      },
      paket: {
        required: true,
      },
    },
    messages: {
      nama: {
        required: "*Masukkan nama lengkap.",
      },
      handphone: {
        required: "*Masukkan no hp. aktif.",
      },
      address: {
        required: "*Masukkan alamat.",
      },
      paket: {
        required: "*Pilih paket.",
      },
    },
    submitHandler: function (form) {
      var form = new FormData();
      var whatsapp = jQuery(".btn-submit").attr("data-whatsapp");
      var paket = jQuery("select[name=paket]").val();
      var nama = jQuery("input[name=nama]").val();
      var alamat = jQuery("input[name=address]").val();
      var namapaket = jQuery("select[name=paket]")
        .find(":selected")
        .attr("data-namapaket");

      form.append("nama", jQuery("input[name=nama]").val());
      form.append("paket", jQuery("select[name=paket]").val());
      form.append("handphone", jQuery("input[name=handphone]").val());
      form.append("address", jQuery("input[name=address]").val());

      jQuery.ajax({
        url: "Main/insert/",
        method: "POST",
        data: form,
        dataType: "json",
        processData: false,
        contentType: false,
        success: function (data) {
          if (data.status) {
            jQuery("#modalBook").modal("toggle");

            Swal.fire("Pesanan kami terima.", data.msg, "success").then(
              (result) => {
                window.open(
                  "https://wa.me/" +
                    whatsapp +
                    "?text=Halo%20saya%20" +
                    nama +
                    "%20beli%20paket%20" +
                    namapaket,
                  "_blank"
                );
              }
            );
          } else {
            Swal.fire("Gagal", data.msg, "error");
          }
        },
      });
    },
    errorPlacement: function (label, element) {
      label.addClass("error");
      element.after(label);
    },
  });

  $("#partnership-form").validate({
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
      },
      address: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "*Masukkan nama anda/Instansi.",
      },
      phone: {
        required: "*Masukkan Nomor handphone aktif.",
      },
      address: {
        required: "*Masukkan Alamat.",
      },
    },
    submitHandler: function (form) {
      var form = new FormData();
      var whatsapp = jQuery(".btn-jangkauan").attr("data-whatsapp");
      var phone = jQuery("input[name=phone]").val();
      var nama = jQuery("input[name=name]").val();
      var alamat = jQuery("input[name=address]").val();

      window.open(
        "https://wa.me/" +
          whatsapp +
          "?text=Halo%20saya%20" +
          nama +
          "%20dengan%20nomer%20" +
          phone,
        "_blank"
      );
    },
    errorPlacement: function (label, element) {
      label.addClass("error");
      element.after(label);
    },
  });

  // Gradients

  //   $("#demo").gradient({
  //     colors: ["#FDC183", "#F2884D", "#FED6AE", "#FBEFE3"],
  //     static: false,
  //   });

  // Video js
  //   videojs("video-player", {
  //       controls: true,
  //       autoplay: false
  //     });

  $("#titlerTicker1").eocjsNewsticker({
    speed: 20,
    timeout: 1,
    divider:
      '<img src="' +
      window.location.hostname +
      '/../template/frontend/assets/images/star.png" class="star-divider">',
    type: "static",
  });

  $("#titlerTicker2").eocjsNewsticker({
    speed: 40,
    timeout: 1,
    divider:
      '<img src="' +
      window.location.hostname +
      '/../template/frontend/assets/images/star.png" class="star-divider">',
    type: "static",
  });

  // Show

  $(window).on("load", function () {
    if ($("body").hasClass("ada-promo")) {
      $("#modalPromo").modal("show");
    }
  });

  //   Slider
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 15,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1368: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1920: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const accordionContent = document.querySelectorAll(".accordion-content");

  accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () => {
      item.classList.toggle("open");

      let description = item.querySelector(".description");
      if (item.classList.contains("open")) {
        description.style.height = `${description.scrollHeight}px`;
        item.querySelector("i").classList.replace("fa-plus", "fa-minus");
      } else {
        description.style.height = "0px";
        item.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
      removeOpen(index);
    });
  });

  function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
      if (index1 != index2) {
        item2.classList.remove("open");

        let des = item2.querySelector(".description");
        des.style.height = "0px";
        item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
    });
  }
  $(".nav-icon").click(function () {
    $(this).toggleClass("open");
    $(".navigation-panel").toggleClass("open");
  });

  // Tooltip
  $(".keycaps-item").tooltip({
    trigger: "click",
    placement: "top",
  });

  function setTooltip(btn, message) {
    $(btn).tooltip("hide").attr("data-original-title", message).tooltip("show");
  }

  function hideTooltip(btn) {
    setTimeout(function () {
      $(btn).tooltip("hide");
    }, 1000);
  }

  // Clipboard
  var clipboard = new ClipboardJS(".keycaps-item");
  clipboard.on("success", function (e) {
    setTooltip(e.trigger, "Copied!");
    hideTooltip(e.trigger);
    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);
    var clone = $(e.trigger).clone();
    $(clone).appendTo(".cc-cloned");

    e.clearSelection();
  });
  clipboard.on("error", function (e) {
    setTooltip(e.trigger, "Failed!");
    hideTooltip(e.trigger);
  });

  // Loader
  window.onload = loader;
  function loader() {
    let loaderPage = document.querySelector(".loader-page");
    let counter = document.querySelector(".loader-counter");
    let fill = document.querySelector(".loader-fill");
    let tc = document.querySelector(".title-central");
    let panels = document.querySelectorAll(".panel-content");
    let amount = 10;
    let interval = setInterval(loop, 50);
    function loop() {
      if (amount >= 100) {
        clearInterval(interval);
        loaderPage.style.visibility = "hidden";
        loaderPage.style.opacity = "0";

        setTimeout(function () {
          tc.classList.add("open-central");
          [].forEach.call(panels, (el) => {
            el.classList.add("flipped");
          });
          loadChart();
        }, 500);
      } else {
        amount++;
        fill.style.width = amount + "%";
        counter.textContent = amount * 1 + "%";
      }
    }
  }
})(jQuery);
