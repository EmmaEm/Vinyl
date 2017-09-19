INSERT INTO
  albums (title, artist)
VALUES
  ('Malibu', 'Anderson .Paak'),
  ('A Seat at the Table', 'Solange Knowles'),
  ('Melodrama', 'Lorde'),
  ('In Rainbows', 'Radiohead')
  ;

INSERT INTO
  users (name, email, password)
VALUES
  ('Arya Stark', 'no1@ravens.com', 'needle'),
  ('Jon Snow', 'kingofthenorth@ravens.com', 'ghost'),
  ('Daenerys Targaryen', 'khaleesi@ravens.com', 'dragons')
  ;

INSERT INTO
  reviews (content, user_id, album_id)
VALUES
  ('Review review review review. Review review review review. Review review review review. Review review review review. Review review review review. Review review review review. Review review review review. Review review review review. Review review review review. Review review review review. Review review review review. Review review review review. Review review review review.', 1, 1),
  ('I''m a review. I''m a review. I''m a review. I''m a review. I''m a review. I''m a review. I''m a review. I''m a review. I''m a review. I''m a review. I''m a review. I''m a review. I''m a review. I''m a review. I''m a review. I''m a review.', 1, 2),
  ('Judge judge judge. Judgey judge. Judge judge judge. Judgey judge. Judge judge judge. Judgey judge. Judge judge judge. Judgey judge. Judge judge judge. Judgey judge. Judge judge judge. Judgey judge. Judge judge judge. Judgey judge. Judge judge judge. Judgey judge.', 1, 3),
  ('I have opinions I want you to know about!', 2, 1)
  ;
