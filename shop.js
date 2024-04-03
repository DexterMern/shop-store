let $ = document;
class kala {
  constructor(_image, _description, _title, _price, _comment, _likeCount) {
    this.image = _image;
    this.description = _description;
    this.title = _title;
    this.price = _price;
    this.comment = _comment;
    this.likeCount = _likeCount;
  }
}
window.onload = function () {
  let product = [
    new kala("airpod.png", "هدفون بلوتوثی اپل", "ساعت مچی", 1500000, 5, 7),
    new kala(
      "battery.webp",
      "کفش پیاده روی مردانه مدل NOV-BK",
      "ساعت مچی",
      5000000,
      4,
      45
    ),
    new kala(
      "camera.png",
      "دوربین مداربسته تحت شبکه اسفیورد",
      "ساعت مچی",
      10000000,
      2,
      63
    ),
    new kala(
      "coolpad.webp",
      "گوشی موبایل آنر مدل X6 دو سیم کارت",
      "ساعت مچی",
      5200000,
      8,
      45
    ),
    new kala(
      "laptop.webp",
      "لپ تاپ 15.6 اینچی لنوو مدل",
      "ساعت مچی",
      6500000,
      45,
      12
    ),
    new kala(
      "phone.png",
      "یخچال فریزر خودرو ایستکول",
      "ساعت مچی",
      6900000,
      12,
      5
    ),
    new kala(
      "shoes.png",
      "پایه خنک کننده لپ تاپ تسکو",
      "ساعت مچی",
      3500000,
      13,
      0
    ),
    new kala(
      "watch.webp",
      "ساعت هوشمند مدل K59 PRO - IPS",
      "ساعت مچی",
      4200000,
      22,
      0
    ),
    new kala(
      "watch2.webp",
      "ساعت هوشمند مدل T800 ultra",
      "ساعت مچی",
      2200000,
      75,
      0
    ),
  ];

  let AddElem = `
    <div class="shop_box">
      <div class="box-plus">
        <i class="fa fa-plus"></i>
      </div>
    </div>`;
  $.getElementById("contaner").innerHTML += AddElem;

  product.forEach((item) => {
    let newItemHtml = `
    <div class="shop_box">
    <img src="${item.image}" alt="airpod" />
    <p class="item_text1">${item.description}</p>
    <a href="#" class="item_text2">${item.price}تومان</a>
    <div class="delete-icon"><i class="fa fa-cog"></i></div>
    </div>
    `;
    $.getElementById("contaner").innerHTML += newItemHtml;
  });
  let modalElem = `
    <div class="form-add">
    <div class="delete-icon" id="box-delete"><i class="fa fa-times"></i></div>
    <br>
    <br>
    <br>
    <div>
      <label for="first-inp">photo name:</label>
      <input type="text" name="first-inp" placeholder="example.png" id="input-image">
    </div>
    <div>
      <label for="second-inp">title:</label>
      <input type="text" name="second-inp" placeholder="پنکه کنترل از راه دور راسان" id="input-title">
    </div>
    <div>
      <label for="third-inp">price:</label>
      <input type="number" name="third-inp" id="input-price">
    </div>
    <div>
      <input type="submit" value="sumbit" id="upload">
    </div>
  </div>
    `;

  $.body.innerHTML += modalElem;

  let AddBtn = $.querySelector(".box-plus");
  let modalAdd = $.querySelector(".form-add");
  let mainElem = $.getElementById("main");
  AddBtn.addEventListener("click", () => {
    modalAdd.classList.add("show-form-add");
    mainElem.classList.add("show-main");
  });

  let deleteElem = $.getElementById("box-delete");
  deleteElem.addEventListener("click", () => {
    modalAdd.classList.remove("show-form-add");
    mainElem.classList.remove("show-main");
  });

  let uploadElem = $.getElementById("upload");

  uploadElem.addEventListener("click", () => {
    let imageElem = $.getElementById("input-image").value;
    let titleElem = $.getElementById("input-title").value;
    let peiceElem = $.getElementById("input-price").value;
    let addItemHtml = `
    <div class="shop_box">
    <img src="${imageElem}" alt="airpod" />
    <p class="item_text1">${titleElem}</p>
    <a href="#" class="item_text2">${peiceElem}تومان</a>
    <div class="delete-icon"><i class="fa fa-cog"></i></div>
    </div>
    `;
    $.getElementById("contaner").innerHTML += addItemHtml;
    modalAdd.classList.remove("show-form-add");
    mainElem.classList.remove("show-main");
  });
  console.table(product)
};