// $('#hex-container').hide();
// $('#rgbForm').hide();

$('#inputChooser').hide();

let findOut = num => {
  if (0 <= num <= 255) {
    return true;
  }
  return false;
};

let resetInput = (a, b, c) => {
  $(a)
    .val('')
    .focus();
  $(b).val('');
  $(c).val('');
};

let rgbControl = () => {
  $('#inputChooser').hide();
  $('#hex-container').hide();
  $('#rgbForm').show();
  $('#colorCode').hide();
  $('#rgbVal').show();
  $('#rgbBreakdown').show();
  $('#redInput').focus();
  return;
};

let hexControl = () => {
  $('#inputChooser').hide();
  $('#hex-container').show();
  $('#colorCode').show();
  $('#rgbForm').hide();
  $('#rgbVal').hide();
  $('#rgbBreakdown').hide();
  $('#bgInput').focus();
  return;
};

// $('#hexChoice').click(function() {
//   hexControl();
//   let alphaObj = {
//     A: 10,
//     B: 11,
//     C: 12,
//     D: 13,
//     E: 14,
//     F: 15
//   };
//   let calc = n => {
//     let firstNum = n[0];
//     let secondNum = n[1];
//     let newFirstNum = 0;
//     let newSecondNum = 0;

//     !isNaN(Number(firstNum))
//       ? (newFirstNum = Number(firstNum) * 16)
//       : firstNum in alphaObj
//       ? (newFirstNum = alphaObj[firstNum] * 16)
//       : (newFirstNum = newFirstNum);
//     !isNaN(Number(secondNum))
//       ? (newSecondNum = Number(secondNum))
//       : secondNum in alphaObj
//       ? (newSecondNum = alphaObj[secondNum])
//       : (newSecondNum = newSecondNum);

//     return newFirstNum + newSecondNum;
//   };

//   $('#bgInput').focus();

//   $('#bgInput').keyup(function(event) {
//     event.preventDefault();

//     let letterReg = /[G-Z!@#$%\^&*)(+=._-]/;

//     let newColor = $('#bgInput')
//       .val()
//       .toUpperCase();
//     console.log(newColor.length);

//     if (
//       (event.which === 13 && newColor.match(letterReg)) ||
//       (event.which === 13 && newColor.length !== 6)
//     ) {
//       alert('Incorrect Input Idiot');
//       $('#bgInput').val('');
//       return $('#bgInput').focus();
//     }

//     if (newColor.length === 6 && event.which === 13) {
//       // console.log(newColor);
//       if (newColor.match(letterReg)) alert('Incorrect Input');
//       let red = newColor.slice(0, 2);
//       let green = newColor.slice(2, 4);
//       let blue = newColor.slice(4, 6);

//       $('#circle').css('background-color', '#' + newColor);

//       $('#colorCode').text('Hex Color: #' + newColor);
//       $('#red').text('Red: ' + calc(red));
//       $('#green').text('Green: ' + calc(green));
//       $('#blue').text('Blue: ' + calc(blue));
//       $('#bgInput').val('');
//       $('#bgInput').focus();
//     }
//     return;
//   });
// });

// // $('#rgbChoice').click(function(event) {
//   event.preventDefault();
rgbControl();

$('#rgbButton').click(function(event) {
  event.preventDefault();

  let red = $('#redInput').val();
  let green = $('#greenInput').val();
  let blue = $('#blueInput').val();
  let rgb = [Number(red), Number(green), Number(blue)];
  let checkVal = !rgb.every(color => {
    return 0 <= color && color <= 255;
  });

  if (red.length === 0 || blue.length === 0 || 0 || green.length == 0) {
    resetInput($('#redInput'), $('#greenInput'), $('#blueInput'));
    alert('All 3 colors must have a number between 0 and 255');
  }

  if (isNaN(Number(red)) || isNaN(Number(green)) || isNaN(Number(blue))) {
    resetInput($('#redInput'), $('#greenInput'), $('#blueInput'));
    return alert('Incorrect Input');
  }

  if (checkVal) {
    resetInput($('#redInput'), $('#greenInput'), $('#blueInput'));
    alert('Numbers must be between 0 and 255');
    return;
  }
  $('#rgbVal').text(`Color Code: rgb(${red}, ${green}, ${blue})`);
  $('#rgbBreakdown').text(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

  $('#circle').css('background-color', `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);
  $('#output').css('background-color', 'white');
  // $('#redInput').val('');
  // $('#greenInput').val('');
  // $('#blueInput').val('');
  // $('#redInput').focus();
  resetInput($('#redInput'), $('#greenInput'), $('#blueInput'));
  return;
});

// });
