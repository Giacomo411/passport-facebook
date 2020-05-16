/**
 * Parse profile.
 *
 * @param {object|string} json
 * @return {object}
 * @access public
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }
  
  var profile = {};
  profile.id = json.id;
  profile.username = json.username;
  profile.displayName = json.name;
  /*profile.name = { familyName: json.last_name,
                   givenName: json.first_name,
                   middleName: json.middle_name };*/

  profile.firstName = json.first_name;
  profile.lastName =json.last_name;

  profile.gender = json.gender;
  profile.profileUrl = json.link;
  
  /*if (json.email) {
    profile.emails = [{ value: json.email }];
  }
  
  if (json.picture) {
    if (typeof json.picture == 'object' && json.picture.data) {
      // October 2012 Breaking Changes
      profile.photos = [{ value: json.picture.data.url }];
    } else {
      profile.photos = [{ value: json.picture }];
    }
  }*/

  if (json.email) {
    profile.email = json.email;
  }

  if (json.picture) {
    if (typeof json.picture == 'object' && json.picture.data) {
      // October 2012 Breaking Changes
      profile.picture = json.picture.data.url;
    } else {
      profile.picture = json.picture;
    }
  }
  
  return profile;
};
