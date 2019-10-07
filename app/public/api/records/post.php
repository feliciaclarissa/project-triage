<?php

//0. Validate my datase
use Ramsey\Uuid\Uuid;
$guid= Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Patient
    (patientGuid, firstName,lastName,dob,sexAtBirth)
    VALUES (?,?,?,?,?)'
  );
$stmt->execute([
  $_POST['patientGuid'],
  $_POST['visitDescription'],
  $_POST['priority']
]);

// patientGuid VARCHAR(64) PRIMARY KEY,
// firstName VARCHAR(64),
// lastName VARCHAR(64),
// dob DATE DEFAULT NULL,
// sexAtBirth CHAR(1) DEFAULT ''

// TODO: Error checking?!

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('location: ../records//?guid='.$guid);
