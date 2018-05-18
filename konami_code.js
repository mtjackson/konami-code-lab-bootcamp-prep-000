const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  const input = document.querySelector('body')
  let i = 0
  input.addEventListener('keydown', function(e) {
    function onKeyDownHandler(e) {
      const key = e.key
      var nextKey = codes[i]

      if (key === nextKey) {
        i++

        if (i === codes.length) {
          alert('hurray!')
          i = 0
        }
      } else {
        i = 0
      }
    }
  })
  
}
