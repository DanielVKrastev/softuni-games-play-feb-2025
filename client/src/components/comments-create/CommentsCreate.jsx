import commentService from "../../services/commentService";

export default function CommentsCreate({
    email,
    gameId,
}) {
    const commentAction = async (formData) => {
        const comment = formData.get('comment');
        const createdComment = await commentService.create(email, gameId, comment);
        console.log(createdComment);
        
    }

    return (
        <>
            <article className="create-comment">
            <label>Add new comment:</label>
                <form className="form" action={commentAction}>
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