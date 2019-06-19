module.exports = (req, res) => {
  try {
        //  Put the code here, so if you get an error, it can show the error on the browser...

        req.notdefined.something

    } catch (e) {
        if (!res.finished) {
            res.end(e.stack)
        }
    }
}
