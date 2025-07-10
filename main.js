const data = [];

    const taskSelect = document.getElementById("taskSelect");

    const inputs = {
      Monday: document.getElementById("Monday"),
      Tuesday: document.getElementById("Tuesday"),
      Wednesday: document.getElementById("Wednesday"),
      Thursday: document.getElementById("Thursday"),
      Friday: document.getElementById("Friday")
    };

    const tableBody = document.getElementById("tableBody");

    

    function clearInputs() {
      taskSelect.value = '';
      for (let key in inputs) {
      
        inputs[key].value = '';
       
        
      }
    
    }

    const timeRegex = /^(0?[0-9]|1[0-9]|2[0-3])(:([0-5][0-9]))?$/;

    function isValidTime(value) {
      return value === '' || timeRegex.test(value); 
    }

    function addRow() {
    //   const task = taskSelect.value;
      const row = {
        // task,
        Monday: inputs.Monday.value.trim(),
        Tuesday: inputs.Tuesday.value.trim(),
        Wednesday: inputs.Wednesday.value.trim(),
        Thursday: inputs.Thursday.value.trim(),
        Friday: inputs.Friday.value.trim()
      };

      const atLeastOneTime = Object.values(row).some(val => val !== '');
      console.log("...........",atLeastOneTime);

      const task = taskSelect.value;
      
      if (!task || !atLeastOneTime) {
        alert("Please select a task and enter at least one time.");
        return;
      }

   
      for (let key in inputs) {
        const value = row[key];
        if (!isValidTime(value)) {
          alert(`Invalid time format for ${key}. Use format like 1, 01, 1:30, or 01:30`);
          return;
        }
      }
     
      
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${task}</td>
        <td>${row.Monday}</td>
        <td>${row.Tuesday}</td>
        <td>${row.Wednesday}</td>
        <td>${row.Thursday}</td>
        <td>${row.Friday}</td>
      `;
      tableBody.appendChild(tr);

      data.push(row);
      clearInputs();
    }

    function SubmitData() {
      if (data.length === 0) {
        alert("No data to submit");
        return;
      }

      const json = JSON.stringify(data,null, 2);
      console.log(json); 
    }