var recordApp = new Vue({
  el: '#patientRecordApp',
  data: {           //*variable that we use
    patients: []
},
  methods: {
  fetchPatients () {         /*assign function to varialbe*/
    fetch('dummy.php')
    .then(response => response.json())
    .then(json => {recordApp.patients = json});
}
},
created() {                 //*define code
  this.fetchPatients();
}

});
