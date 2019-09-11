var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {           //*variable that we use
    patients: []
},
  methods: {
  fetchPatients () {         /*assign function to varialbe*/
    fetch('dummy.php')
    .then(response => response.json())
    .then(json => {waitingApp.patients = json});
}
},
created() {                 //*define code
  this.fetchPatients();
}

});
