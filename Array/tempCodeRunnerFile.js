  if (records.value = "") {
        delete records.id.prop;
    } else if (records.id.prop !== "tracks" && records.id.value) {
        records = records.id.prop;
    }