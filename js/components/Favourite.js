export const FavouriteComponent = (padre) => {
    let html =`<label class="mdc-text-field mdc-text-field--outlined">
    <span class="mdc-notched-outline">
      <span class="mdc-notched-outline__leading"></span>
      <span class="mdc-notched-outline__notch">
        <span class="mdc-floating-label" id="my-label-id">Your Name</span>
      </span>
      <span class="mdc-notched-outline__trailing"></span>
    </span>
    <input type="text" class="mdc-text-field__input" aria-labelledby="my-label-id">
  </label>`

    $(padre).html(html);
}
