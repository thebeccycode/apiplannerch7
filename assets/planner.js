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

function timeBlocks(){
    let plannerHTML = ''

    for (let i = 0; i < timeSegments.length; i++) {
        const plannercards = timeSegments[i];

        plannerHTML+= 
        `
        <div class="card">
  <div class="card-body">
    ${plannercards.showsAs}
  </div>
  <label for="reminder" class="form-label"> Reminder: </label>
  <textarea class="form-control" id="reminder" rows="3"></textarea>
</div>
        `
        
    }

    $('planner-container').html(plannerHTML);
}

$("#planner-container").on("click", ".reminder-btn", function(){
    const reminder = $(this).siblings("textarea").data("name");
    console.log(reminder)
});

timeBlocks();

