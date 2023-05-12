import UrlParser from "../../routes/url-parser";
import RestoSource from "../../data/resto-source";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const DetailPages = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoSource.RestoDetail(url.id);
    const restaurantContainer = document.querySelector("#restaurant");
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default DetailPages;
