const linkShortener = (x) => {
    let link = x.split("");
    link.sort();
    return "Your link was shortened to: http://" + link.join("") + ".io"
};

export default linkShortener;