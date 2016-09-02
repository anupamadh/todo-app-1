export class Article {
    title: string;
    checked: boolean;
    votes: number;
    constructor(title: string, checked: boolean, votes?: number) {
        this.title = title;
        this.checked = checked;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }



}