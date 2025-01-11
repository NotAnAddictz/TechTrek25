

function EditButton({ onClick }) {
    const editData = async () => {
        try {
            console.log("editing")
        } catch (error) {
            console.error("Error inserting", error)
          }
        }

  return (
    <button type="button" className="btn btn-secondary" onClick={editData}>Edit</button>

  )
}

export default EditButton