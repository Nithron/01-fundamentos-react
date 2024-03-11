import { Avatar } from './Avatar'
import { Comment } from './Coment'
import {useState} from 'react'
import styles from './Post.module.css'
import {format, formatDistanceToNow} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'


export function Post (props) {
    const [comments, setComments] = useState([
        "Post muito bacana!!",])
    
    const [newCommentText, setNewCommentText] = useState('')

    const publishdDateFormated = format(props.publishedAt, "d, 'de' LLLL 'às' HH:mm'h'", ptBr) 

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBr,
        addSuffix: true,
    })

    function handleCreateNewComment(e) {
        e.preventDefault()

        
        setComments([...comments, newCommentText])
        setNewCommentText('')

    }

    function handleNewCommentText (e) {
        e.preventDefault()
        e.target.setCustomValidity('')
        setNewCommentText(e.target.value)
    }

    function deleteComment (commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid (e) {
        e.target.setCustomValidity('Esse campo é obrigatório!')
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  
                        src={props.author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>
                            {props.author.name}
                        </strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time title={publishdDateFormated} dateTime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>

            </header>
            <div className={styles.content}>
                {props.content.map(line => {
                    return (line.type == 'paragraph' ? <p key={line.content}>{line.content}</p> : <p key={line.content}><a href="">{line.content}</a></p>)
                })}
                
            </div>
            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu comentário</strong>

                <textarea 
                    name='comment'
                    placeholder='Deixe um comentário' 
                    onChange={handleNewCommentText}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />                
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty} >Publicar</button>

                </footer>
            </form>

            <div className={styles.commentList}>
               {comments.map(comment => {
               
                return <Comment 
                            content={comment} 
                            key={comment}
                            onDeleteComment={deleteComment}
                        />
               })}

            </div>


        </article>
    )
}