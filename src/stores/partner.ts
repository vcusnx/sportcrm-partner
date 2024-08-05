import { defineStore } from "pinia";

export const usePartnerStore = defineStore("partner", {
  state: () => ({
    partner: 0,
    tgid: 0,
    active: false,
    saldo: 0,
    cnt: 0,
    sum: 0,
    debt: 0,
    debtcnt: 0,
    wait: 0,
    waitcnt: 0,
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
