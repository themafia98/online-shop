var pag = {};
pag.Pager = function() {

    this.paragraphsPerPage = 3;
    this.currentPage = 1;
    this.pagingControlsContainer = '#pagingControls';
    this.pagingContainerPath = '#content';

    //  страницы
    this.numPages = function() {
        var numPages = 0;
        if (this.paragraphs != null && this.paragraphsPerPage != null) {
            numPages = Math.ceil(this.paragraphs.length / this.paragraphsPerPage); // наименьшее целое
        }
        return numPages;
    };

//  текущая страница, передает номер текущий страницы и контент который  выводим
    this.showPage = function(page) {
        this.currentPage = page;
        var html = '';

// выводим контент  который соответствует текущей странице
        this.paragraphs.slice((page-1) * this.paragraphsPerPage,
            ((page-1)*this.paragraphsPerPage) + this.paragraphsPerPage).each(function() {
            html += '<div>' + $(this).html() + '</div>';
        });
// вставляем контент
        $(this.pagingContainerPath).html(html);
//  Список
        renderControls(this.pagingControlsContainer, this.currentPage, this.numPages());
    }
// Навигация


    var renderControls = function(container, currentPage, numPages) {
// разметка (цикл)
        var pagingControls = '<ul>';
        for (var i = 1; i <= numPages; i++) {
            if (i != currentPage) {
                pagingControls += '<li><a class="list-pagination" href="#" onclick="pager.showPage(' + i + '); return false;">' + i + '</a></li>';
            } else {
                pagingControls += '<li class="list-pagination-unActive">' + i + '</li>';
            }
        }

        pagingControls += '</ul>';

        $(container).html(pagingControls);
    }

}   