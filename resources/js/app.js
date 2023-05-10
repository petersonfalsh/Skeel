//function showLoading() {
//    $('#loading-overlay').show();
//}
//
//function hideLoading() {
//    $('#loading-overlay').hide();
//}

function handleUpdateDialogComplete(xhr, status, args) {
    if (args && args.updateresult) {
        if (args.updateresult == true) {
            PF('editDialog').hide();
        } else {
        }
    } else {
    }
}
