import DetailPages from "../views/pages/detail";
import ListPages from "../views/pages/list";

const routes = {
  "/": ListPages,
  "/list": ListPages,
  "/detail/:id": DetailPages,
};

export default routes;
