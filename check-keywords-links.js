javascript:let input = window.prompt('Check for this keyword in any links:');let a = document.getElementsByTagName('a');for(let i=0; i<a.length; i++){let s = a[i].href;console.log(s);if (s && s.indexOf(input) != -1) {a[i].style.backgroundColor = 'red';}};
