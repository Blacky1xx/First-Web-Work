var result;

function check() {
  var question;
  var value1;
  var value2;

  question = 1;
  value1 = 0;
  value2 = 0;

  result = "";

  var choice;

  for (question = 1; question <= 3; question++) {
    var q = document.forms["quiz"].elements["q" + question];
    if (question == 3) {
      choice = q.value.trim().toLowerCase();
      if (choice == "bolt") {
        choice = "value2";
      } else {
        choice = "value1";
      }
    } else {
      for (var i = 0; i < q.length; i++) {
        if (q[i].checked) {
          choice = q[i].value;
        }
      }
    }
    if (choice == "value1") {
      value1++;
    }

    if (choice == "value2") {
      value2++;
    }
  }

  if (value2 == 0) {
    // Нет правильных ответов
    result = "ocenka2";
  } else if (value2 == 1) {
    // Один правильный ответ
    result = "ocenka3";
  } else if (value2 == 2) {
    // Два правильных ответа
    result = "ocenka4";
  } else if (value2 == 3) {
    // Три правильных ответа
    result = "ocenka5";
  } else {
    result = "404";
  }

  window.location = result + ".html";
}

// ]]></script>
