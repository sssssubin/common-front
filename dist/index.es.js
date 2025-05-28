import { createElementBlock as e, openBlock as t, createElementVNode as u, Fragment as r, renderList as s, toDisplayString as d, createCommentVNode as b } from "vue";
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
      default: null
    }
  },
  emits: ["cell-click"],
  setup(c, { emit: y }) {
    const h = y, m = (i, p, l) => {
      h("cell-click", { row: i, key: p, value: l });
    };
    return (i, p) => (t(), e("div", k, [
      u("table", {
        class: "sales-table",
        "data-type": c.tableType
      }, [
        u("thead", null, [
          (t(!0), e(r, null, s(c.headers, (l, o) => (t(), e("tr", {
            key: "header-" + o
          }, [
            l.label ? (t(), e("th", {
              key: 0,
              colspan: l.colspan
            }, d(l.label), 9, C)) : (t(!0), e(r, { key: 1 }, s(l.columns, (a, n) => (t(), e("th", {
              key: "col-" + n,
              rowspan: a.rowspan,
              colspan: a.colspan
            }, d(a.label), 9, S))), 128))
          ]))), 128))
        ]),
        u("tbody", null, [
          (t(!0), e(r, null, s(c.data, (l, o) => (t(), e("tr", {
            key: "row-" + o
          }, [
            (t(!0), e(r, null, s(l, (a, n) => (t(), e(r, null, [
              n ? (t(), e("td", {
                key: n,
                onClick: (f) => m(l, n, a),
                class: "clickable-cell"
              }, d(a), 9, T)) : b("", !0)
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
