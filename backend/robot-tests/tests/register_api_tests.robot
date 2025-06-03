*** Settings ***
Library           RequestsLibrary
Library           JSONLibrary
Library           Collections
Library    libs.MongoCleanup
Resource           ../variables/env.robot
Suite Setup       Create Session    bloogo    ${API_BASE_URL}

*** Variables ***
${REGISTER_ENDPOINT}     /auth/register

*** Test Cases ***
Register With Valid Data Should Succeed
    ${email}=    Generate Unique Email    user
    &{payload}=    Create User Payload    ${email}

    ${response}=    POST On Session    bloogo    ${REGISTER_ENDPOINT}    json=${payload}
    Should Be Equal As Integers    ${response.status_code}    200
    Dictionary Should Contain Key    ${response.json()}    message
    Dictionary Should Contain Key    ${response.json()}    help
    ${message}=    Get From Dictionary    ${response.json()}    message
    Should Be Equal    ${message}    User Registered
    ${help}=    Get From Dictionary    ${response.json()}    help
    Should Be Equal    ${help}       login To get access Token

    [Teardown]    Delete Test User    ${email}

Register With Duplicate Email Should Fail
    ${email}=    Generate Unique Email    duplicatedUser
    &{payload}=    Create User Payload    ${email}

    ${response1}=    POST On Session    bloogo    ${REGISTER_ENDPOINT}    json=${payload}
    Should Be Equal As Integers    ${response1.status_code}    200
    Dictionary Should Contain Key    ${response1.json()}    message

    ${response2}=    Evaluate    __import__('requests').post("${API_BASE_URL}${REGISTER_ENDPOINT}", json=${payload}, headers={'accept':'application/json', 'Content-Type':'application/json'})    modules=requests
    Should Be Equal As Integers    ${response2.status_code}    406
    Dictionary Should Contain Key    ${response2.json()}    detail
    ${detail}=    Get From Dictionary    ${response2.json()}    detail
    Dictionary Should Contain Key    ${detail}    message
    ${error_message}=    Get From Dictionary    ${detail}    message
    Should Contain    ${error_message}    Already Exists

    [Teardown]    Delete Test User    ${email}

*** Keywords ***
Generate Unique Email
    [Arguments]    ${prefix}
    ${timestamp}=    Get Time    epoch
    ${email}=    Set Variable    ${prefix}${timestamp}@example.com
    RETURN    ${email}

Create User Payload
    [Arguments]    ${email}
    &{payload}=    Create Dictionary
    ...    email=${email}
    ...    password=ValidPass@123
    ...    isverified=False
    ...    createdon=2025-06-03
    RETURN    ${payload}