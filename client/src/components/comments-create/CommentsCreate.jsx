export default function CommentsCreate() {
    return (
        <>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
            <label>Add new comment:</label>
                <form className="form">
                    <textarea
                    name="comment"
                    placeholder="Comment......"
                    defaultValue={""}
                    />
                    <input
                    className="btn submit"
                    type="submit"
                    defaultValue="Add Comment"
                    />
                </form>
            </article>
        </>
    )
}