export interface PieceCopy {
  glance:  string;
  closer:  string;
  deeper:  string;
  turn:    string;
  twoWays: string;
  made:    string;
}

export interface Piece {
  number:  number;
  slug:    string;
  title:   string;
  eyebrow: string;
  medium:  string;
  teaser:  string;
  image:   string;
  images?: [string, string, string]; // [detail, deeper, turn] — optional for backward compat
  copy:    PieceCopy;
}
