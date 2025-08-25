import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { blackcolor, Dark_Gray, graycolor, whitecolor } from '../styles/commonstyles';
import { Linking } from 'react-native';

const AuthorComponent = ({ authorData }) => {
  if (!authorData) return null; // Don't render if there's no author data

  const renderSocialLinks = (links) => {
    const socialPlatforms = {
      facebook: require('../Assets/Images/facebook.png'),
      instagram: require('../Assets/Images/instagram.png'),
      twitter: require('../Assets/Images/twitter.png'),
    };

    return Object.entries(socialPlatforms).map(([key, icon]) => {
      if (links[key]) {
        return (
          <TouchableOpacity
            key={key}
            onPress={() => Linking.openURL(links[key])} // Open social media link
            style={styles.socialButton}
          >
            <Image source={icon} style={styles.socialIcon} />
          </TouchableOpacity>
        );
      }
      return null;
    });
  };
  return (
    <View style={{borderColor:Dark_Gray,borderWidth:5,marginTop:10}}>
    <View style={styles.authorContainer}>
      {authorData.avatar && (
        <Image
          source={{ uri: authorData.avatar }}
          style={styles.authorImage}
        />
      )}
      <Text style={styles.authorName}>{authorData.name}</Text>
      <Text style={styles.authorRole}>{authorData.roles}</Text>
      <View style={styles.socialLinks}>
        {renderSocialLinks(authorData.social_links)}
      </View>
      {authorData.description && <Text style={styles.authorBio}>{authorData.description}</Text>}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authorContainer: {
    alignItems: 'center',
    padding: 12,
    backgroundColor: whitecolor,
    borderRadius: 8,
    borderColor: graycolor,
    borderWidth: 1,
    margin: 10,
  },
  authorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  authorName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: blackcolor
  },
  authorRole: {
    fontSize: 14,
    fontWeight: 'bold',
    color: blackcolor,
    textAlign: 'center'
  },
  authorBio: {
    textAlign: 'center',
    color: blackcolor,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500'
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  socialButton: {
    marginHorizontal: 10,
  },
});

export default AuthorComponent;
