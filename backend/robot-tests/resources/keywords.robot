*** Keywords ***
Generate Unique Email
    [Arguments]    ${prefix}
    ${timestamp}=    Get Time    epoch
    ${email}=    Set Variable    ${prefix}${timestamp}@example.com
    RETURN    ${email}