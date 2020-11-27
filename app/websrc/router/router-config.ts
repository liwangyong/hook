type Route = {
  path: string;
  name?: string;
  fnc: Promise<typeof import("*.md") | typeof import("*.vue")>;
};

type RouterMenu = Array<Route>;

export const routerMenu: RouterMenu = [
  {
    path: "/",
    name: "/",
    fnc: import("../docs/input.md")
  },
  {
    path: "/button",
    name: "/Button",
    fnc: import("../docs/button.md")
  },
  {
    path: "/input",
    name: "/Input",
    fnc: import("../docs/input.md")
  },
  {
    path: "/swiper",
    name: "/swiper",
    fnc: import("../docs/swiper.md")
  }
];
