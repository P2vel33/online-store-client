import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];
    this._devices = [
      { id: 1, name: "IPHONE 12 PRO", price: 25000, rating: 4, img: "" },
      { id: 1, name: "IPHONE 12 PRO", price: 25000, rating: 4, img: "" },
      { id: 1, name: "IPHONE 12 PRO", price: 25000, rating: 4, img: "" },
      { id: 1, name: "IPHONE 12 PRO", price: 25000, rating: 4, img: "" },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
