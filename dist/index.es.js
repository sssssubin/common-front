import { createElementBlock as e, openBlock as t, createElementVNode as d, Fragment as r, renderList as s, toDisplayString as i, createCommentVNode as b } from "vue";
const k = { class: "table-wrapper" }, _ = ["data-type"], C = ["colspan"], S = ["rowspan", "colspan"], T = ["onClick"], q = {
  __name: "SalesTable",
  props: {
    headers: {
      type: Array,
      required: !0
    },
    data: {
      type: Array,
      required: !0
    },
    tableType: {
      type: String,
      default: ""
    }
  },
  emits: ["cell-click"],
  setup(c, { emit: y }) {
    const h = y, m = (u, p, l) => {
      h("cell-click", { row: u, key: p, value: l });
    };
    return (u, p) => (t(), e("div", k, [
      d("table", {
        class: "sales-table",
        "data-type": c.tableType
      }, [
        d("thead", null, [
          (t(!0), e(r, null, s(c.headers, (l, o) => (t(), e("tr", {
            key: "header-" + o
          }, [
            l.label ? (t(), e("th", {
              key: 0,
              colspan: l.colspan
            }, i(l.label), 9, C)) : (t(!0), e(r, { key: 1 }, s(l.columns, (a, n) => (t(), e("th", {
              key: "col-" + n,
              rowspan: a.rowspan,
              colspan: a.colspan
            }, i(a.label), 9, S))), 128))
          ]))), 128))
        ]),
        d("tbody", null, [
          (t(!0), e(r, null, s(c.data, (l, o) => (t(), e("tr", {
            key: "row-" + o
          }, [
            (t(!0), e(r, null, s(l, (a, n) => (t(), e(r, null, [
              n ? (t(), e("td", {
                key: n,
                onClick: (f) => m(l, n, a),
                class: "clickable-cell"
              }, i(a), 9, T)) : b("", !0)
            ], 64))), 256))
          ]))), 128))
        ])
      ], 8, _)
    ]));
  }
};
export {
  q as SalesTable
};
