import mnt from "moment";

export function dummyFunction() {
  console.log("Im a dummy function");
}

export function showDate() {
  console.log(mnt(new Date()).format("DD-MM-YYYY"));
}
