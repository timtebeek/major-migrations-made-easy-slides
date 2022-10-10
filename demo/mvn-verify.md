# Now finally, we run Maven verify to see how we did on the migration.

## There will be two test failures that we have to fix by hand.
- These are caused by the validator migration & a response type change.
- Not a bad result for an automated migration!

```shell {1,6-10,12,15}
$ ./mvnw verify

[INFO] 
[INFO] Results:
[INFO] 
[ERROR] Failures: 
[ERROR]   ValidatorTests.shouldNotValidateWhenFirstNameEmpty:42 
expected: "may not be empty"
but was : "must not be empty"
[ERROR]   VetControllerTests.testShowResourcesVetList:67 Content type expected:<application/json;charset=UTF-8> but was:<application/json>
[INFO] 
[ERROR] Tests run: 41, Failures: 2, Errors: 0, Skipped: 1
[INFO] 
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  11.572 s
[INFO] Finished at: 2022-10-10T11:25:00+01:00
[INFO] ------------------------------------------------------------------------
```