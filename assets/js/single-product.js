// details tab
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      tabButtons.forEach((btn) => {
        btn.classList.remove("bg-primary", "text-white", "active");
        btn.classList.add("bg-gray-200", "text-black");
      });
      this.classList.remove("bg-gray-200", "text-black");
      this.classList.add("bg-primary", "text-white", "active");

      tabContents.forEach((content) => {
        content.style.display = "none";
      });
      document.getElementById(tabId + "Tab").style.display = "block";
    });
  });

  document.getElementById("descriptionTab").style.display = "block";
});

// Review tab content
const reviewTab = document.getElementById("reviewTab");
fetch("/assets/data/reviews.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((r) => {
      const div = document.createElement("div");
      div.className =
        "bg-gray-300 p-2 lg:p-4 flex items-center gap-4 mx-auto mb-4 rounded-md";
      div.innerHTML = `
           <div>
            <div class="flex items-center gap-2 ">
            <img src=${r.userProfile} alt="" class="w-8 lg:w-12">
              <h4>${r.userName}</h4>
              <div>
              ${
                r.isVerified
                  ? `<p class="bg-green-400 px-2 py-1 rounded-md text-xs lg:text-lg">Verified</p>`
                  : ""
              }
              </div>
            </div>
            <div>
              <p>${r.review}</p>
            </div>
            <div class="product-rating h-12">
                <span class="fa fa-star ${
                  r.rating >= 1 ? "checked text-yellow-400 " : "text-gray-500"
                }"></span>
                <span class="fa fa-star ${
                  r.rating >= 2 ? "checked text-yellow-400" : "text-gray-500"
                }"></span>
                <span class="fa fa-star ${
                  r.rating >= 3 ? "checked text-yellow-400" : "text-gray-500"
                }"></span>
                <span class="fa fa-star ${
                  r.rating >= 4 ? "checked text-yellow-400" : "text-gray-500"
                }"></span>
                <span class="fa fa-star ${
                  r.rating == 5 ? "checked text-yellow-400" : "text-gray-500"
                }"></span>
              </div>
            </div>
        `;

      reviewTab.appendChild(div);
    });
  })
  .catch((error) => {
    console.error("Error fetching review data:", error.message);
  });
