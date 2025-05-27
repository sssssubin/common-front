import { createElementBlock as e, openBlock as t, createElementVNode as _, Fragment as c, renderList as d, toDisplayString as y, createCommentVNode as k } from "vue";
const m = (a, p) => {
  const s = a.__vccOpts || a;
  for (const [u, o] of p)
    s[u] = o;
  return s;
}, b = { class: "table-wrapper" }, f = ["data-type"], C = ["colspan"], g = ["rowspan", "colspan"], v = ["onClick"], S = {
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
  setup(a, { emit: p }) {
    const s = p, u = (o, h, l) => {
      s("cell-click", { row: o, key: h, value: l });
    };
    return (o, h) => (t(), e("div", b, [
      _("table", {
        class: "sales-table",
        "data-type": a.tableType
      }, [
        _("thead", null, [
          (t(!0), e(c, null, d(a.headers, (l, i) => (t(), e("tr", {
            key: "header-" + i
          }, [
            l.label ? (t(), e("th", {
              key: 0,
              colspan: l.colspan
            }, y(l.label), 9, C)) : (t(!0), e(c, { key: 1 }, d(l.columns, (n, r) => (t(), e("th", {
              key: "col-" + r,
              rowspan: n.rowspan,
              colspan: n.colspan
            }, y(n.label), 9, g))), 128))
          ]))), 128))
        ]),
        _("tbody", null, [
          (t(!0), e(c, null, d(a.data, (l, i) => (t(), e("tr", {
            key: "row-" + i
          }, [
            (t(!0), e(c, null, d(l, (n, r) => (t(), e(c, null, [
              r ? (t(), e("td", {
                key: r,
                onClick: (T) => u(l, r, n),
                class: "clickable-cell"
              }, y(n), 9, v)) : k("", !0)
            ], 64))), 256))
          ]))), 128))
        ])
      ], 8, f)
    ]));
  }
}, q = /* @__PURE__ */ m(S, [["__scopeId", "data-v-02176de3"]]);
export {
  q as SalesTable
};
