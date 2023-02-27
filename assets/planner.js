//moment().format('MMMM Do YYYY, h:mm:ss a'); -present day

//moment().subtract(1, 'days').calendar(); -yesterday

//moment().add(1, 'days').calendar();  -tomorrow

const timeSegments = [
{
    hour: 0900,
    showsAs: "9am"
},
{
    hour: 1000,
    showsAs: "10am"
},
{
    hour: 1100,
    showsAs: "11am"
},
{
    hour: 1200,
    showsAs: "12 noon"
},
{
    hour: 1300,
    showsAs: "1pm"
},
{
    hour: 1400,
    showsAs: "2pm"
},
{
    hour: 1500,
    showsAs: "3pm"
},
{
    hour: 1600,
    showsAs: "4pm"
},
{
    hour: 1700,
    showsAs: "5pm"
},
{
    hour: 1800,
    showsAs: "6pm"
}
];

//function for adding time blocks dynamically
function timeBlocks(){
    let plannerHTML = ''

    for (let i = 0; i < timeSegments.length; i++) {
        const plannercards = timeSegments[i];

        plannerHTML+= 
        `
        <div class="card time-block">
  <div class="card-body" id="time-title">
    ${plannercards.showsAs}
  </div>
  <label id="reminder-btn" for="reminder" class="form-label"> Reminder: </label>
  <input type="text" rows="3" id="userInput">
  <br>
  <button onclick="getData()" id="reminder-submit" class="saveBtn" type="submit"> Submit</button>
</div>
<div id="output-for-reminder"></div>
        `
        
    }

    $('#planner-container').html(plannerHTML);
}

timeBlocks();


//function for adding input to user-reminder card
//retrieve input from reminder-btn's textarea

function getData(){
    let inputBox = document.getElementById("userInput");
    
    let inputData = inputBox.value

    let reminderData = document.getElementById("output-for-reminder");

    reminderData.innerHTML = `<p>Reminder: ${inputData}</p>`
}

getData();