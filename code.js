var budget = promptNum("How much is your budget? How much will you spend on your new car? Enter in dollars:");
var carMoney;
setNumber("MoneyLeft", budget);
onEvent("FindCar", "click", function( ) {
  setScreen("Question1Screen");
});
onEvent("radioBlue", "click", function( ) {
  showElement("Next1");
});
onEvent("radioBlack", "click", function( ) {
  showElement("Next1");
});
onEvent("radioGreen", "click", function( ) {
  showElement("Next1");
});
onEvent("radioRed", "click", function( ) {
  showElement("Next1");
});
onEvent("radioWhite", "click", function( ) {
  showElement("Next1");
});
onEvent("radioYellow", "click", function( ) {
  showElement("Next1");
});
onEvent("radio5seater", "click", function( ) {
  showElement("Next2");
});
onEvent("radio7seater", "click", function( ) {
  showElement("Next2");
});
onEvent("radioChevrolet", "click", function( ) {
  showElement("Next3");
});
onEvent("radioHonda", "click", function( ) {
  showElement("Next3");
});
onEvent("Next1", "click", function( ) {
  setScreen("Question2Screen");
});
onEvent("Next2", "click", function( ) {
  setScreen("Question3Screen");
});
onEvent("Next3", "click", function( ) {
  setScreen("Car'sScreen");
  setNumber("moneyleft2", budget);
  hideElement("AnnoucementLabel");
  hideElement("Anoouncementlabel2");
  if (getProperty("radioRed", "checked") && (getProperty("radio5seater", "checked") && getProperty("radioChevrolet", "checked"))) {
    carMoney = 30580;
    setImageURL("CarImage", "assets/download.jpg");
    setText("carLabel", "Chevy Rav4");
    setNumber("CarMoney", carMoney);
    onEvent("Nextcar", "click", function( ) {
      carMoney = 27090;
      setNumber("CarMoney", carMoney);
      setText("carLabel", "Chevy SUV");
      onEvent("Nextcar", "click", function( ) {
        carMoney = 25055;
        setImageURL("CarImage", "assets/impala.jpg");
        setNumber("CarMoney", carMoney);
        setText("carLabel", "Chevy Impala");
      });
      setImageURL("CarImage", "https://www.mercurynews.com/wp-content/uploads/2016/08/20150408__0409trax1.jpg?w=525");
    });
  }
  if (getProperty("radioBlue", "checked") && (getProperty("radio5seater", "checked") && getProperty("radioChevrolet", "checked"))) {
    carMoney = 23800;
    setImageURL("CarImage", "https://di-uploads-pod5.dealerinspire.com/mccluskeychevy/uploads/2019/02/2019-Chevrolet-Equinox-comp-left-blue-1.jpg");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Chevy Rav4");
    onEvent("Nextcar", "click", function( ) {
      carMoney = 25085;
      setNumber("CarMoney", carMoney);
      setText("carLabel", "Chevy SUV");
      onEvent("Nextcar", "click", function( ) {
        carMoney = 30000;
        setImageURL("https://file.kbb.com/kbb/images/content/editorial/slideshow/2014-chevrolet-impala-2.5/2014-chevrolet-impala-113-600-001.jpg?w=768", "assets/impala.jpg");
        setNumber("CarMoney", carMoney);
        setText("carLabel", "Chevy Impala");
      });
    });
  }
  if (getProperty("radioWhite", "checked") && (getProperty("radio5seater", "checked") && getProperty("radioChevrolet", "checked"))) {
    carMoney = 31000;
    setImageURL("CarImage", "https://images.dealer.com/ddc/vehicles/2020/Toyota/RAV4/SUV/trim_LE_c86ee0/color/Super%20White-040-251%2C250%2C249-640-en_US.jpg");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Chevy Rav4");
    onEvent("Nextcar", "click", function( ) {
      carMoney = 25000;
      setImageURL("CarImage", "https://content.homenetiol.com/2000292/2143540/0x0/4d089b5a8f6d43559e58a7c8e7cb9247.jpg");
      setNumber("CarMoney", carMoney);
      setText("carLabel", "Chevy SUV");
      onEvent("Nextcar", "click", function( ) {
        carMoney = 25800;
        setImageURL("CarImage", "https://images.carstory.com/-8734222609554624843/1/t/424x-");
        setNumber("CarMoney", carMoney);
        setText("carLabel", "Chevy Impala");
      });
    });
  }
  if (getProperty("radioBlack", "checked") && (getProperty("radio5seater", "checked") && getProperty("radioChevrolet", "checked"))) {
    carMoney = 30890;
    setImageURL("CarImage", "https://di-uploads-pod5.dealerinspire.com/mccluskeychevy/uploads/2019/08/2017-Toyota-RAV4-Cincinnati-OH.jpg");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Chevy Rav4");
    onEvent("Nextcar", "click", function( ) {
      carMoney = 23560;
      setImageURL("CarImage", "https://di-uploads-pod5.dealerinspire.com/mccluskeychevy/uploads/2019/07/2019-Chevy-Blazer-Cincinnati-OH.jpg");
      setNumber("CarMoney", carMoney);
      setText("carLabel", "Chevy SUV");
      onEvent("Nextcar", "click", function( ) {
        carMoney = 28000;
        setImageURL("CarImage", "https://assets1.dealeron.com/assets/shared/CustomHTMLFiles/Responsive/MRP/Chevrolet/2019/Impala/images/2019-Chevrolet-Impala-07.jpg");
        setNumber("CarMoney", carMoney);
        setText("carLabel", "Chevy Impala");
      });
    });
  }
  if (getProperty("radioYellow", "checked") && (getProperty("radio5seater", "checked") && getProperty("radioChevrolet", "checked"))) {
    carMoney = 25080;
    setImageURL("CarImage", "https://bidfax.info/uploads/posts/2019-12/24/toyota-rav4-le-2017-2t3bfrevxhw667259-img2.jpg");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Chevy Rav4");
    onEvent("Nextcar", "click", function( ) {
      carMoney = 25500;
      setImageURL("CarImage", "https://i.imgur.com/SiKIgyj.jpg");
      setNumber("CarMoney", carMoney);
      setText("carLabel", "Chevy SUV");
      onEvent("Nextcar", "click", function( ) {
        carMoney = 28097;
        setImageURL("CarImage", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-9XBa3jIFdk6LVGZdcXjKa0XKEp7GZel2ZQ&usqp=CAU");
        setNumber("CarMoney", carMoney);
        setText("carLabel", "Chevy Impala");
      });
    });
  }
  if (getProperty("radioGreen", "checked") && (getProperty("radio5seater", "checked") && getProperty("radioChevrolet", "checked"))) {
    carMoney = 26000;
    setImageURL("CarImage", "https://bidfax.info/uploads/posts/2019-08/21/toyota-rav4-xle-2013-jtmrfrev9dd041806-img1.jpg");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Chevy Rav4");
    onEvent("Nextcar", "click", function( ) {
      carMoney = 27090;
      setImageURL("CarImage", "https://i.ytimg.com/vi/1oTAFduB8pE/maxresdefault.jpg");
      setNumber("CarMoney", carMoney);
      setText("carLabel", "Chevy SUV");
      onEvent("Nextcar", "click", function( ) {
        carMoney = 25099;
        setImageURL("CarImage", "https://di-uploads-pod1.s3.amazonaws.com/mikeandersonchevy/uploads/2016/04/2016-Chevy-Impala.png");
        setNumber("CarMoney", carMoney);
        setText("carLabel", "Chevy Impala");
      });
    });
  }
  if (getProperty("radioGreen", "checked") && (getProperty("radio7seater", "checked") && getProperty("radioChevrolet", "checked"))) {
    showElement("nocarlabel");
  }
  if (getProperty("radioYellow", "checked") && (getProperty("radio7seater", "checked") && getProperty("radioChevrolet", "checked"))) {
    showElement("nocarlabel");
  }
  if (getProperty("radioBlue", "checked") && (getProperty("radio7seater", "checked") && getProperty("radioChevrolet", "checked"))) {
    carMoney = 29081;
    setImageURL("CarImage", "https://i.pinimg.com/originals/1c/78/d2/1c78d22d952ce69d5218f2994100fdca.png");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Chevy Tahoe");
  }
  if (getProperty("radioRed", "checked") && (getProperty("radio7seater", "checked") && getProperty("radioChevrolet", "checked"))) {
    carMoney = 29000;
    setImageURL("CarImage", "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/crossovers-suvs/tahoe/colorizer/01-images/2020-tahoe-1lz-g1e-colorizer.jpg?imwidth=960");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Chevy Tahoe");
    onEvent("Nextcar", "click", function( ) {
      carMoney = 28014;
      setImageURL("CarImage", "assets/2020-Chevrolet-Traverse-.1..jpg");
      setNumber("CarMoney", carMoney);
      setText("carLabel", "Chevy Traverse");
    });
  }
  if (getProperty("radioWhite", "checked") && (getProperty("radio7seater", "checked") && getProperty("radioChevrolet", "checked"))) {
    carMoney = 27999;
    setImageURL("CarImage", "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2021/crossovers-suvs/tahoe/mov/01-images/2021-tahoe-safety-01-v2.jpg?imwidth=960");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Chevy Tahoe");
    onEvent("Nextcar", "click", function( ) {
      carMoney = 26986;
      setImageURL("CarImage", "https://cars.usnews.com/static/images/Auto/izmo/i36138919/2018_chevrolet_traverse_angularfront.jpg");
      setNumber("CarMoney", carMoney);
      setText("carLabel", "Chevy Traverse");
    });
  }
  if (getProperty("radioBlack", "checked") && (getProperty("radio7seater", "checked") && getProperty("radioChevrolet", "checked"))) {
    carMoney = 28509;
    setImageURL("CarImage", "https://i1.wp.com/www.musclecarsandtrucks.com/wp-content/uploads/2019/12/2021-Chevrolet-Suburban-High-Country-28.jpg?fit=1500%2C998&ssl=1");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Chevy Tahoe");
    onEvent("Nextcar", "click", function( ) {
      carMoney = 27090;
      setImageURL("CarImage", "https://www.bigskid.com/wp-content/uploads/2018/10/ext_GB8_deg01x640.jpg");
      setNumber("CarMoney", carMoney);
      setText("carLabel", "Chevy Traverse");
    });
  }
  if (getProperty("radioBlue", "checked") && (getProperty("radio5seater", "checked") && getProperty("radioHonda", "checked"))) {
    carMoney = 28900;
    setImageURL("CarImage", "https://www.wuwm.com/sites/wuwm/files/styles/x_large/public/201903/pilot2.jpg");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Honda Pilot");
    onEvent("Nextcar", "click", function( ) {
      carMoney = 28050;
      setImageURL("CarImage", "https://m.media-amazon.com/images/I/71nyqsilLlL._UY560_.jpg");
      setNumber("CarMoney", carMoney);
      setText("carLabel", "Honda Fit");
    });
  }
  if (getProperty("radioYellow", "checked") && (getProperty("radio5seater", "checked") && getProperty("radioHonda", "checked"))) {
    showElement("nocarlabel");
  }
  if (getProperty("radioGreen", "checked") && (getProperty("radio5seater", "checked") && getProperty("radioHonda", "checked"))) {
    showElement("nocarlabel");
  }
  if (getProperty("radioRed", "checked") && (getProperty("radio5seater", "checked") && getProperty("radioHonda", "checked"))) {
    carMoney = 27999;
    setImageURL("CarImage", "https://www.valleyhondadealers.com/wp-content/uploads/Models/Pilot/2020/2020-Pilot-1-Ready-For-Any-Adventure.jpg");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Honda Pilot");
    onEvent("Nextcar", "click", function( ) {
      carMoney = 28072;
      setImageURL("CarImage", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWek-JRv_8d0HW7aDfEKKDpjd_dgmALIaeXw&usqp=CAU");
      setNumber("CarMoney", carMoney);
      setText("carLabel", "Honda Fit");
    });
  }
  if (getProperty("radioWhite", "checked") && (getProperty("radio5seater", "checked") && getProperty("radioHonda", "checked"))) {
    carMoney = 28055;
    setImageURL("CarImage", "https://di-uploads-pod18.dealerinspire.com/germainhondaofdublin/uploads/2020/07/ger-hodub_2021-honda-pilot-abt.jpg");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Honda Pilot");
    onEvent("Nextcar", "click", function( ) {
      carMoney = 27999;
      setImageURL("CarImage", "https://cars.usnews.com/static/images/Auto/izmo/i4869/2015_honda_fit_angularfront.jpg");
      setNumber("CarMoney", carMoney);
      setText("carLabel", "Honda Fit");
    });
  }
  if (getProperty("radioBlack", "checked") && (getProperty("radio5seater", "checked") && getProperty("radioHonda", "checked"))) {
    carMoney = 28506;
    setImageURL("CarImage", "https://cdn.motor1.com/images/mgl/kPJOP/s1/2020-honda-pilot-black-edition.jpg");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Honda Pilot");
    onEvent("Nextcar", "click", function( ) {
      carMoney = 27500;
      setImageURL("CarImage", "https://cars.usnews.com/static/images/Auto/izmo/i44062343/2018_honda_fit_angularfront.jpg");
      setNumber("CarMoney", carMoney);
      setText("carLabel", "Honda Fit");
    });
  }
  if (getProperty("radioBlue", "checked") && (getProperty("radio7seater", "checked") && getProperty("radioHonda", "checked"))) {
    carMoney = 29000;
    setImageURL("CarImage", "https://wieck-honda-production.s3.amazonaws.com/photos/2013beeb2c0cc2f2389ff60d99da3257986e394c/thumbnail-364x204.jpg");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Honda Odyssey");
  }
  if (getProperty("radioYellow", "checked") && (getProperty("radio7seater", "checked") && getProperty("radioHonda", "checked"))) {
    showElement("nocarlabel");
  }
  if (getProperty("radioGreen", "checked") && (getProperty("radio7seater", "checked") && getProperty("radioHonda", "checked"))) {
    carMoney = 29999;
    setImageURL("CarImage", "https://blogmedia.dealerfire.com/wp-content/uploads/sites/116/2018/07/2017-odyssey-elite-gallery-ext-forest-mist-metallic-beauty-516-rear-passenger-1400-1x_o-e1531248728562.jpg");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Honda Odyssey");
  }
  if (getProperty("radioRed", "checked") && (getProperty("radio7seater", "checked") && getProperty("radioHonda", "checked"))) {
    carMoney = 29678;
    setImageURL("CarImage", "https://blogmedia.dealerfire.com/wp-content/uploads/sites/1050/2019/11/Red-2020-Honda-Odyssey-in-front-of-water-from-exterior-passenger-side_o.jpg");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Honda Odyssey");
  }
  if (getProperty("radioWhite", "checked") && (getProperty("radio7seater", "checked") && getProperty("radioHonda", "checked"))) {
    carMoney = 29592;
    setImageURL("CarImage", "https://cdn.iseecars.com/image2/29002.jpg");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Honda Odyssey");
  }
  if (getProperty("radioBlack", "checked") && (getProperty("radio7seater", "checked") && getProperty("radioHonda", "checked"))) {
    carMoney = 29256;
    setImageURL("CarImage", "https://m.media-amazon.com/images/I/61uuWdhpNTL._UY560_.jpg");
    setNumber("CarMoney", carMoney);
    setText("carLabel", "Honda Odyssey");
  }
});
onEvent("Back", "click", function( ) {
  setScreen("MainScreen");
  setNumber("MoneyLeft", budget);
});
onEvent("CarImage", "click", function( ) {
  if (carMoney <= budget) {
    budget = budget - carMoney;
    showElement("AnnoucementLabel");
    setNumber("moneyleft2", budget);
  } else {
    showElement("Anoouncementlabel2");
  }
});
onEvent("AnnoucementLabel", "click", function( ) {
  setScreen("connecting");
  setTimeout(function() {
    setScreen("form_for_car");
  }, 3000);
});
onEvent("button1", "click", function( ) {
  var theirnumber = getProperty("text_input2", "value");
  createRecord("car customers", {Name:(getText("text_input1")),Contact_No:(Number(theirnumber)),Email:(getText("text_input3")),City:(getText("text_input4"))}, function() {
    setScreen("confirmation");
  });
});
onEvent("button2", "click", function( ) {
  setScreen("MainScreen");
});
