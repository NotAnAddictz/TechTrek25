function DeleteButton({ onClick }) {
    const deleteData = async () => {
        try {
            console.log("deleting")
        } catch (error) {
            console.error("Error inserting", error)
          }
        }

  return (
    <button type="button" className="btn btn-danger" onClick={deleteData}>Delete</button>


  )
}

export default DeleteButton