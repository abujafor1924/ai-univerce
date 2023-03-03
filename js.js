let data = [1, 2, 3, 4, 5, 6];
let shouldSlice = true;

document.getElementById("btn_see").addEventListener("click", () => {
  shouldSlice = !shouldSlice;

  if (shouldSlice) {
    // do something with the sliced data array here
    console.log(data.slice(0, 6));
  } else {
    // do something with the full data array here
    console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }
});
