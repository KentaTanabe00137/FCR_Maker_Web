function showAddModal(category) {
    let newValue = prompt(`${category} に新しい項目を追加:`);
    if (newValue) {
        fetch('/add_option', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({category: category, value: newValue})
        }).then(response => response.json()).then(data => {
            if (data.success) {
                alert("追加成功!");
                location.reload();
            } else {
                alert("エラー!");
            }
        });
    }
}

function showRemoveModal(category) {
    let valuesToRemove = prompt(`${category} から削除する項目をカンマ区切りで入力:`);
    if (valuesToRemove) {
        fetch('/remove_option', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({category: category, values: valuesToRemove.split(",")})
        }).then(response => response.json()).then(data => {
            if (data.success) {
                alert("削除成功!");
                location.reload();
            } else {
                alert("エラー!");
            }
        });
    }
}

function generatePDF() {
    let shipper = document.getElementById("shipper").value;
    let packing = document.getElementById("packing").value;
    let agent = document.getElementById("agent").value;

    fetch('/generate_pdf', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({shipper, packing, agent})
    }).then(response => response.json()).then(data => {
        if (data.success) {
            alert("PDF生成完了!");
        } else {
            alert("エラー!");
        }
    });
}
