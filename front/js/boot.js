$("#openModalBtn").on("click", function () {
    $("#modalBox").modal("show");
});
// 모달 안의 취소 버튼에 이벤트를 건다.
$("#closeModalBtn").on("click", function () {
    $("#modalBox").modal("hide");
});

var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

function modal() {
    let temp_html = `<div class="modal">
            <div class="dimmed"></div>

                <article class="contents">
            <header class="top">
                <div class="user_container">
                    <div class="profile_img">
                        <img src="../asset/img/thumb.jpeg" alt="프로필이미지" />
                    </div>
                    <div class="user_name">
                        <div class="nick_name m_text">MetaBook</div>
                    </div>
                    <div class="gather_link">
                        <button type="submit" class="write-submit">입장하기</button>
                    </div>
                    <div class="modal_exit"><button onclick="closeModal()" class="modal_exit_button" type="submit">x</button></div>
                </div>
            </header>

            <div class="img_section">
                <div class="trans_inner">
                    <div><img src="../asset/img/thumb02.jpg" alt="visual01" /></div>
                </div>
            </div>

            <div class="bottom_icons">
                <div class="left_icons">
                    <div class="heart_btn">
                        <div class="sprite_heart_icon_outline" name="39" data-name="heartbeat"></div>
                    </div>
                    <div class="sprite_bubble_icon"></div>
                </div>
            </div>
            <div class="likes m_text">
                좋아요
                <span id="like-count-39">999</span>
                개
            </div>
            <div class = 'scroll_container' id= 'style-1'>  
                <h3 class="maintitle">Title</h2>
                <div class="maintext">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati et ex labore ipsam dolores
                    autem doloremque consequatur. Aliquid sed, placeat soluta suscipit voluptatem sunt iusto quos
                    laboriosam, tenetur aperiam atque.
                </div>

                <div class="comment-detail">
                    <div class="comment-nickname">은광</div>
                    <div class="comment-text">강아지가 너무 귀여워요~!</div>
                    <button data-name="comment_delete" class="comment_delete">x</button>
                </div>
                <div class="comment-detail">
                    <div class="comment-nickname">은광</div>
                    <div class="comment-text">강아지가 너무 귀여워요~!</div>
                    <button data-name="comment_delete" class="comment_delete">x</button>
                </div>
                <div class="comment-detail">
                    <div class="comment-nickname">은광</div>
                    <div class="comment-text">강아지가 너무 귀여워요~!</div>
                    <button data-name="comment_delete" class="comment_delete">x</button>
                </div>
                <div class="comment-detail">
                    <div class="comment-nickname">은광</div>
                    <div class="comment-text">강아지가 너무 귀여워요~!</div>
                    <button data-name="comment_delete" class="comment_delete">x</button>
                </div>
                <div class="comment-detail">
                    <div class="comment-nickname">은광</div>
                    <div class="comment-text">강아지가 너무 귀여워요~!</div>
                    <button data-name="comment_delete" class="comment_delete">x</button>
                </div>
                <div class="comment-detail">
                    <div class="comment-nickname">은광</div>
                    <div class="comment-text">강아지가 너무 귀여워요~!</div>
                    <button data-name="comment_delete" class="comment_delete">x</button>
                </div>
                
            </div>

            <div class="comment_field" id="add-comment-post37">
                <input type="text" placeholder="comment" class="comment_text" />
                <div class="upload_btn m_text" data-name="comment">댓글등록</div>
            </div>
        </article>
        </div>`;

    $("body").append(temp_html);
}

function closeModal() {
    $(".modal").remove();
}
