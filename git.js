console.log("=================")
console.log("auto git by JOEY")
console.log("====== 🤪  ========\n")

const git = require('simple-git');
const inquirer = require('inquirer')

const gst = function () {
  git()
    .status((_, status) => {
      console.log("branch:  ", status.tracking, "\n")
      let choices = []
      if (status.modified.length) {
        const separator = [(new inquirer.Separator("--- modified ---"))]
        choices = choices.concat(separator).concat(status.modified)
      }
      if (status.not_added.length) {
        const separator = [(new inquirer.Separator("--- not added ---"))]
        choices = choices.concat(separator).concat(status.not_added)
      }
      if (status.deleted.length) {
        const separator = [(new inquirer.Separator("--- deleted ---"))]
        choices = choices.concat(separator).concat(status.deleted)
      }
      inq(choices)
    })
}
const inq = function (choices) {
  inquirer.prompt({
    type: 'checkbox',
    message: 'add files:',
    name: 'add',
    choices: choices,
  })
    .then(ans => {
      git().add(ans.add)
      commit()
    })
}
const commit = function () {
  inquirer.prompt({
    type: "input",
    message: "commit message:",
    name: "commit"
  })
    .then(ans => {
      console.log("commit && push ...")
      git().commit(ans.commit)
      push()
    })
}
const push = function () {
  git().push().then(() => console.log("done"))
}
gst()
