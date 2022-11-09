export function fetchCommon (quer, attr, api) {
    let formRaw = [];
    let formData = {};
    //formData['action'] = action;
    //formRaw.push (formData);
    fetch ( "http://localhost:8081/api/v1/" + api,
    {
        method: "GET"
        
    }).then(resp => resp.json () .then (data => ({status: resp.status, body: data}))).
    then (resp_json => {
        console.log(resp_json)
    if (resp_json.status === 200) {
    let parent_ele = document. getElementById('list');
    let ele = parent_ele. querySelector (quer);
    for (let i = 0; i < resp_json.body.length; i++) {
        console.log(resp_json.body[0]['branchId'])
    ele.innerHTML = ele.innerHTML +
    '<option value="' + resp_json.body[i][attr] + '">' + resp_json.body[i][attr] + '</option>';
    }}
     else {
    alert(resp_json.message)
    window.location.reload();
    }
    }).catch(error => {
    alert(error)

   
    
    
    })}