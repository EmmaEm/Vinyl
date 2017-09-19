const deleteReview = (deleteButton) => {
  const confirmDelete = confirm('Are you sure you want to delete this review?')
  if (confirmDelete) {
    const reviewId = deleteButton.target.getAttribute('data-review-id')
    console.log(`Delete review # ${reviewId}`)
    fetch(`/deletereview/${reviewId}`, {method: 'delete', credentials: 'include'})
      .then(location.reload())
      .catch((error) => {
        console.error(error)
      })
  }
}

document.querySelectorAll('.delete-review').forEach((deleteButton) => {
  deleteButton.addEventListener('click', deleteReview)
})
