import { defineStore } from "pinia";

export const usePartnerStore = defineStore("partner", {
  state: () => ({
    partner: null,
    tgid: null,
    active: null,
    saldo: null,
    cnt: null,
    sum: null,
    debt: null,
    debtcnt: null,
    wait: null,
    waitcnt: null,
    rows: [],
  }),
  actions: {
    setPartnerData(data: any) {
      this.partner = data.partner;
      this.tgid = data.tgid;
      this.active = data.active;
      this.saldo = data.saldo;
      this.cnt = data.cnt;
      this.sum = data.sum;
      this.debt = data.debt;
      this.debtcnt = data.debtcnt;
      this.wait = data.wait;
      this.waitcnt = data.waitcnt;
      this.rows = data.rows;
    },
  },
});
