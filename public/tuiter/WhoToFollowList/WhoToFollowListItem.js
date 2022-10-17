const WhoToFollowListItem  = (who) => {
    return(`
    <li>
      <a href="#" class="list-group-item d-flex gap-3 py-2" aria-current="true">
        <img src="../../images/${who.avatarIcon}" alt="twbs" width="45" height="45"
             class="rounded-circle flex-shrink-0">
        <div class="d-flex gap-2 w-100 justify-content-between">
            <div>
                <strong class="mb-0">${who.userName}</strong>
                <i class="fas fa-check-circle ps-2"></i>
                <p class="mb-0 opacity-75">@${who.handle}</p>
            </div>
            <button type="button" class="btn btn-primary rounded-pill border-0 ps-4 pe-4">Follow
            </button>
        </div>
    </a>
    </li>`
    );
}
export default WhoToFollowListItem ;